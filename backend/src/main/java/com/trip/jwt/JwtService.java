package com.trip.jwt;

import java.util.Map;

public interface JwtService {
	<T> String createAccessToken(String key, T data);
	<T> String createRefreshToken(String key, T data);
	<T> String create(String key, T data, String subject, long expir);
	Map<String, Object> get(String key);
	int getData(String token, String key);
	boolean checkToken(String jwt);
}
