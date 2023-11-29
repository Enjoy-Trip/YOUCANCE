
package com.trip.news.service;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.Map;

public interface NewsCrawlingService {

	String research(String word);

	String get(String apiUrl, Map<String, String> requestHeaders);

	HttpURLConnection connect(String apiUrl);

	String readBody(InputStream body);
}
