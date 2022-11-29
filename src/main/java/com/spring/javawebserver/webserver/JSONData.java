/*
https://api.github.com/repos/timhutton/twitter-archive-parser/stats/contributors
https://api.github.com/repos/timhutton/twitter-archive-parser/pulls
https://api.github.com/repos/timhutton/twitter-archive-parser/stats/contributors
 */
package com.spring.javawebserver.webserver;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.Date;
import java.util.HashMap;


import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.SimpleDateFormat;

public class JSONData {

    // Performs a GET request from given endpoint
    public static String getJson(String getEndpoint) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(getEndpoint))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.statusCode());
        return response.body();
    }

    public static JSONObject issues() throws IOException, InterruptedException {
        String jsonData = "";
        JSONObject json = new JSONObject();
        String url = "https://api.github.com/search/issues?q=repo:microsoft/calculator+type:issue&per_page=100";
        try {
            for ( int i = 1; i <= 10; i++) {
                jsonData = (getJson(url +"&page="+i));
                json.put("page "+i, new JSONObject(jsonData));
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return json;
    }

    public static String contributors() throws IOException, InterruptedException {
        JSONArray data = new JSONArray();
        JSONArray contributors = new JSONArray(getJson("https://api.github.com/repos/microsoft/calculator/stats/contributors"));
        for (int i =0; i<contributors.length(); i++){
            JSONObject tmpcontributors = contributors.getJSONObject(i);
            JSONObject tmpData = new JSONObject();

            tmpData.put("total", tmpcontributors.get("total"));

            JSONObject user = tmpcontributors.getJSONObject("author");
            tmpData.put("user", user.get("login"));

            JSONArray weeks = tmpcontributors.getJSONArray("weeks");
            int additions = 0;
            int deletions = 0;
            JSONArray weeksList = new JSONArray();
            int k = 0;
            while ( weeks.getJSONObject(k).getInt("c") == 0 &&  k< weeks.length()) k++;
            while( k< weeks.length() ){
                JSONObject tmp = weeks.getJSONObject(k);
                additions+= tmp.getInt("a");
                deletions+= tmp.getInt("d");
                Date date = new java.util.Date(tmp.getInt("w")*1000L);
                // the format of your date
                SimpleDateFormat sdf = new java.text.SimpleDateFormat("EEE, MMM d, ''yy");
                // give a timezone reference for formatting (see comment at the bottom)
                sdf.setTimeZone(java.util.TimeZone.getTimeZone("GMT+0"));
                String formattedDate = sdf.format(date);
                tmp.append("string", formattedDate);
                weeksList.put(tmp);
                k++;
            }
            tmpData.put("all", weeksList);
            tmpData.put("additions", additions);
            tmpData.put("deletions", deletions);
            data.put(tmpData);
        }
        return data.toString();
    }

}
