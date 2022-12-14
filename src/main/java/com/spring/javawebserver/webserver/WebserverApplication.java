// package com.spring.javawebserver.webserver;
//
// import java.io.IOException;
//
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.PostMapping;
package com.spring.javawebserver.webserver;

// import java.io.File;
import java.util.ArrayList;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
// import java.util.Collections;
// import java.util.List;
// import java.util.UUID;
import java.util.List;

import javax.print.attribute.IntegerSyntax;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
// import org.json.JSONObject;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.multipart.MultipartFile;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;


@SpringBootApplication
public class WebserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebserverApplication.class, args);
	}

}

@Controller
class JSONDataRequests {
    @GetMapping("/")
    public String filterData(Model model) {
        JSONObject result = null;
        try {
            result = JSONData.issues();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
		HashMap<String,Integer> mapOpen = new HashMap<String,Integer>();
		HashMap<String,Integer> mapClosed = new HashMap<String,Integer>();
    String outputIssues = "[";
   
		try {
			if (result != null) {
				for (int i = 1; i <= 10; ++i) {
					JSONArray curArr = result.getJSONObject("page "+i).getJSONArray("items");
					for (int j = 0; j < curArr.length(); j++) {
            JSONObject obj = curArr.getJSONObject(j).getJSONObject("user");
						String login = obj.getString("login");
						if ( !login.equalsIgnoreCase("MicrosoftIssueBot")) {
							if(curArr.getJSONObject(j).getString("state").equals("open")) {
								mapOpen.put(login, mapOpen.get(login)!=null?mapOpen.get(login)+1:1);
								if (mapClosed.get(login) == null) mapClosed.put(login, 0);
							}
							else {
								mapClosed.put(login, mapClosed.get(login)!=null?mapClosed.get(login)+1:1);
								if (mapOpen.get(login) == null) mapOpen.put(login, 0);
							}
                   
              int issueID = curArr.getJSONObject(j).getInt("number");//
              String title = curArr.getJSONObject(j).getString("title");//
              String openDate = curArr.getJSONObject(j).getString("created_at");//
              String closeDate = "";//
              
              if (curArr.getJSONObject(j).has("closed_at") && !curArr.getJSONObject(j).isNull("closed_at")){//
                 closeDate = curArr.getJSONObject(j).getString("closed_at");//
              }//
              else closeDate = "notClosed";//
              
              title = title.replace("\n", "");
              title = title.replace("\"", "");
              title = title.replace("\t", " ");
              
              outputIssues += "{\"ID\":"+issueID+",\"user\":\""+login+"\",\"title\":\""+title+"\",\"opendate\":\""+openDate+"\",\"closedate\":\""+closeDate+"\"}";//
              outputIssues += ",";//
              if (i == 10 && j == curArr.length()-1) outputIssues = outputIssues.substring(0, outputIssues.length() - 1);
						}
					}
				}
			}
		} catch (JSONException e) {
			 //handle exception
		}
    outputIssues += "]";

		Object[] mapKeys = mapOpen.keySet().toArray();
		Object[] mapVals = mapOpen.values().toArray();
   
		String outputOpen="[";
		for (int i = 0; i < mapKeys.length; i++) {
			if (Integer.parseInt(mapVals[i].toString()) > 1 || mapClosed.get(mapKeys[i]) > 1) {
				outputOpen+="{\"name\":\""+mapKeys[i]+"\",\"open\":"+mapVals[i]+",\"closed\":"+mapClosed.get(mapKeys[i])+"}";
				outputOpen+=",";
			}
			if ( i == mapKeys.length-1 ) outputOpen = outputOpen.substring(0, outputOpen.length() - 1);
		}
		outputOpen +="]";
	  //System.out.println(outputOpen);
    //System.out.println(outputIssues);
		model.addAttribute("outputOpen", outputOpen);
    model.addAttribute("outputIssues", outputIssues);
    
    /////////////////////////////////////////////////////////////
    String outputContrib = "";
    try {
            outputContrib = JSONData.contributors();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    model.addAttribute("outputContrib", outputContrib);
    
		return "index";
    }

}
