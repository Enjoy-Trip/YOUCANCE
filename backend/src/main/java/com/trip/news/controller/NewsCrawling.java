package com.trip.news.controller;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.news.service.NewsCrawlingService;
import com.trip.response.model.ResponseDto;
import com.trip.util.ExceptionHandler;

@RestController
@RequestMapping("/news")
public class NewsCrawling {
	private NewsCrawlingService newsCrawlingService;

	public NewsCrawling(NewsCrawlingService newsCrawlingService) {
		super();
		this.newsCrawlingService = newsCrawlingService;
	}

	@GetMapping(value = "/{researchWord}")
	public ResponseEntity<?> newsList(@PathVariable("researchWord") String word){
	    ResponseDto<JSONObject> response = new ResponseDto<JSONObject>();
	    
	    try {
	        JSONParser parser = new JSONParser();
	        Object obj = parser.parse(newsCrawlingService.research(word));
	        JSONObject jsonobj = (JSONObject) obj;
			response.setState("SUCCESS");
	        response.setMessage("뉴스 검색 성공.");
	        response.setData(jsonobj);
	        return new ResponseEntity<ResponseDto<JSONObject>>(response, HttpStatus.OK);
		}catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("뉴스를 검색하는 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	/*
			"total": 총 검색 결과 수
    		"lastBuildDate": 검색 결과를 생성한 시간
    		"display": 한 번에 표시할 검색 결과 수
    		"start": 검색 시작 위치
    		"items": [
        	{
            	"originallink": 뉴스 기사 원문의 URL
            	"link": 뉴스 기사의 네이버 뉴스 URL. 네이버에 제공되지 않은 기사라면 기사 원문의 URL을 반환합니다.
            	"description": 뉴스 기사의 내용을 요약한 패시지 정보. 패시지 정보에서 검색어와 일치하는 부분은 <b> 태그로 감싸져 있습니다.
            	"title": 뉴스 제목
            	"pubDate": 뉴스 기사가 네이버에 제공된 시간. 네이버에 제공되지 않은 기사라면 기사 원문이 제공된 시간을 반환합니다.
        	}
	 */
}