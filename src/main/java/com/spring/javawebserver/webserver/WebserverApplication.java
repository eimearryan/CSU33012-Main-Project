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
import mainProject.JSONData;

@SpringBootApplication
public class WebserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebserverApplication.class, args);
	}

}

@Controller
class JSONDataRequests {
    @GetMapping("/")
    public String pullHistory(Model model) {
		// model.addAttribute("result", null);
        JSONObject result = null;
        try {
            result = JSONData.pullHistory();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
		// System.out.println(result);
		HashMap<String,Integer> map = new HashMap<String,Integer>();
		try {
			if (result != null) {
				for (int i = 1; i <= 10; ++i) {
					JSONArray curArr = result.getJSONObject("page "+i).getJSONArray("items");
					for (int j = 0; j < curArr.length(); j++) {
						JSONObject obj = curArr.getJSONObject(j).getJSONObject("user");
						String login = obj.getString("login");
						map.put(login, map.get(login)!=null?map.get(login)+1:1);
					}
				}
			}
		} catch (JSONException e) {
			// handle exception
		}

		Object[] mapKeys = map.keySet().toArray();
		Object[] mapVals = map.values().toArray();
		// Object[] returnVal = new Object[mapKeys.length];
		String output="[";
		for (int i = 0; i < mapKeys.length; i++) {
			output+="{\"name\":"+"\""+mapKeys[i]+"\","+"\"value\":"+mapVals[i]+"}";
			if (i != mapKeys.length-1) output+=",";
		}
		output +="]";
		// System.out.println(output);
		model.addAttribute("result", output);
		return "index";
    }

}
