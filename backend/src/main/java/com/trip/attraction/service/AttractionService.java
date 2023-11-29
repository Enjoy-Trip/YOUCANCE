package com.trip.attraction.service;

import java.util.HashMap;
import java.util.List;

import com.trip.attraction.model.AttractionCommentDto;
import com.trip.attraction.model.AttractionDto;

public interface AttractionService {
	List<AttractionDto> attractionList(HashMap<String, String> map);
	AttractionDto attractionDetail(int contentid);
	AttractionCommentDto getAttractionComment(int commentNo);
	Integer createAttraction(AttractionDto attractionDto);
	Integer updateAttraction(AttractionDto attractiontDto);
	Integer deleteAttraction(int contentid);
	Integer writeComment(AttractionCommentDto attractionCommentDto);
	Integer updateComment(AttractionCommentDto attractionCommentDto);
	int deleteComment(int commentNo);
	List<AttractionCommentDto> attractionCommentList(int contentid);
	
}
