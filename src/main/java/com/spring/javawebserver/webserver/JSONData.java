/*
https://api.github.com/repos/timhutton/twitter-archive-parser/stats/contributors
https://api.github.com/repos/timhutton/twitter-archive-parser/pulls
https://api.github.com/repos/timhutton/twitter-archive-parser/stats/contributors


 */
package com.spring.javawebserver.webserver;

import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class JSONData {
   /* public static void main(String[] args) {
        String jsonData = null;
        try {
            jsonData = getJson("https://api.github.com/repos/timhutton/twitter-archive-parser/stats/contributors");
            JSONArray json = new JSONArray(jsonData); // Convert text to object
            System.out.println(json.toString(4)); // Print it with specified indentation
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
*/
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

    public static JSONObject pullHistory() throws IOException, InterruptedException {
        // return getJson("https://api.github.com/repos/microsoft/calculator/pulls");
        String jsonData = "";
        JSONObject json = new JSONObject();
        String url = "https://api.github.com/search/issues?q=repo:microsoft/calculator+type:issue&per_page=100";
        try {
            for ( int i = 1; i <= 10; i++) {
                jsonData = (getJson(url +"&page="+i));
                json.put("page "+i, new JSONObject(jsonData));
                // System.out.println(url +"&page="+i);
            }
            // json = new JSONObject(jsonData); // Convert text to object
            // System.out.println(json.toString(4)); // Print it with specified indentation
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return json;
    }

    public static String commitHistory() throws IOException, InterruptedException {
        return getJson("https://api.github.com/repos/timhutton/twitter-archive-parser/commits");
    }

    public static String contributors() throws IOException, InterruptedException {
        return getJson("https://api.github.com/repos/timhutton/twitter-archive-parser/stats/contributors");
    }
}
