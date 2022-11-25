/*
https://api.github.com/repos/microsoft/calculator/stats/contributors
https://api.github.com/repos/microsoft/calculator/pulls
https://api.github.com/repos/microsoft/calculator/stats/contributors


 */


import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class JSONData {
    public static void main(String[] args) {
        String jsonData = null;
        try {
            jsonData = getJson("https://api.github.com/repos/microsoft/calculator/stats/contributors");
            JSONArray json = new JSONArray(jsonData); // Convert text to object
            System.out.println(json.toString(4)); // Print it with specified indentation
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }



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

    public static String pullHistory() throws IOException, InterruptedException {
        return getJson("https://api.github.com/repos/microsoft/calculator/pulls");
    }
    
    public static String commitHistory() throws IOException, InterruptedException {
        return getJson("https://api.github.com/repos/microsoft/calculator/commits");
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
            for (int k = 0; k< weeks.length(); k++){
                JSONObject tmp = weeks.getJSONObject(k);
                additions+= tmp.getInt("a");
                deletions+= tmp.getInt("d");
            }
            tmpData.put("additions", additions);
            tmpData.put("deletions", deletions);
            data.put(tmpData);
        }
        System.out.println(data.toString(4));
        return data.toString();
    }
}