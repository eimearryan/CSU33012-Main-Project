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
        JSONArray result = null;
        try {
            result = JSONData.pullHistory();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
		// HashMap<String,Integer> map = new HashMap<String,Integer>();
		// try {
		// 	if (result != null) {
		// 		for (int i = 0; i < result.length(); ++i) {
		// 			JSONObject obj = result.getJSONObject(i).getJSONObject("user");
		// 			String login = obj.getString("login");
		// 			map.put(login, map.get(login)!=null?map.get(login)+1:1);
		// 		}
		// 	}
		// } catch (JSONException e) {
		// 	// handle exception
		// }
		// Object[] mapKeys = map.keySet().toArray();
		// Object[] mapVals = map.values().toArray();
		// Object[] returnVal = new Object[mapKeys.length];
		// for (int i = 0; i < mapKeys.length; i++) {
		// 	returnVal[i]=new Object[]{mapKeys[i].toString(), Integer.parseInt(mapVals[i].toString())};
		// }
		model.addAttribute("result", result);
		return "index";
    }

}
