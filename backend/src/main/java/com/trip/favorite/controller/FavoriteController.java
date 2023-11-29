package com.trip.favorite.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trip.favorite.model.FavoriteDto;
import com.trip.favorite.service.FavoriteService;
import com.trip.jwt.JwtService;
import com.trip.response.model.ResponseDto;
import com.trip.user.model.UserDto;
import com.trip.util.ExceptionHandler;

@RestController
@RequestMapping("/like")
public class FavoriteController {
	private final String TOKEN = "Access-Token";
	private FavoriteService favoriteService;
	private JwtService jwtService;
	
	public FavoriteController(FavoriteService favoriteService, JwtService jwtService) {
		super();
		this.favoriteService = favoriteService;
		this.jwtService = jwtService;
	}
	
	// 내가 좋아요 누른 여행지들
	@GetMapping(value = "/user")
	public ResponseEntity<?> myFavoriteList(HttpServletRequest request) {
		ResponseDto<List<FavoriteDto>> response = new ResponseDto<List<FavoriteDto>>();
		String token = request.getHeader(TOKEN);
		int userNo = jwtService.getData(token, "userNo");
		
		try {
			List<FavoriteDto> FavoriteDtoList = favoriteService.myFavoriteList(userNo);

			response.setState("SUCCESS");
			response.setMessage("정상적으로 여행지 리스트를 불러 왔습니다.");
			response.setData(FavoriteDtoList);
			
			return new ResponseEntity<ResponseDto<List<FavoriteDto>>>(response, HttpStatus.OK);
			
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("여행지 리스트를 불러오는 중에 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	// 여행지별 좋아요 누른 사람들
	@GetMapping(value = "/attraction/{contentid}")
	public ResponseEntity<?> likeUserList(@PathVariable("contentid") int contentid) {
		ResponseDto<List<FavoriteDto>> response = new ResponseDto<List<FavoriteDto>>();

		try {
			List<FavoriteDto> FavoriteDtoList = favoriteService.likeUserList(contentid);

			response.setState("SUCCESS");
			response.setMessage("정상적으로 이용자의 리스트를 불러 왔습니다.");
			response.setData(FavoriteDtoList);
			
			return new ResponseEntity<ResponseDto<List<FavoriteDto>>>(response, HttpStatus.OK);
			
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("이용자 리스트를 불러 오는 중에 오류가 발생했습니다.");
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@PostMapping(value = "")
	public ResponseEntity<?> makeLike(HttpServletRequest request, @RequestBody FavoriteDto favoriteDto) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		int userNo = jwtService.getData(token, "userNo");
		
		try {
			if (favoriteDto.getUserDto() == null) {
				favoriteDto.setUserDto(new UserDto());
			}
			
			favoriteDto.getUserDto().setUserNo(userNo);
			
			int rst = favoriteService.makeLike(favoriteDto);

			response.setState("SUCCESS");
			response.setMessage("좋아요 완료");
			response.setData(rst);
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
			
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("여행지 리스트를 불러오는 중에 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@DeleteMapping(value = "")
	public ResponseEntity<?> deleteLike(HttpServletRequest request, @RequestParam HashMap<String, String> map) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		int userNo = jwtService.getData(token, "userNo");
		
		try {
			map.put("userNo", "" + userNo);
			
			int rst = favoriteService.deleteLike(map);

			response.setState("SUCCESS");
			response.setMessage("좋아요 삭제 완료");
			response.setData(rst);
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
			
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("여행지 리스트를 불러오는 중에 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
}
