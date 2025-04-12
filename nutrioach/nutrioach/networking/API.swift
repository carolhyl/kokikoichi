//
//  API.swift
//  nutrioach
//
//  Created by Carol Yang on 2024/10/13.
//

enum API {
    struct Nutritionix {
        static let baseURL = "https://trackapi.nutritionix.com/"
        static let appId = "YOUR_APP_ID"
        static let appKey = "YOUR_APP_KEY"
    }

    struct OpenAI {
        static let baseURL = "https://api.openai.com/v1/"
        static let apiKey = "YOUR_OPENAI_API_KEY"
    }
    
    // 可以根據需要增加其他 API 的結構體
}
