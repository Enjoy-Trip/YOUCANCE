package com.trip.plan.PlanService;

import java.util.List;

import com.trip.plan.model.PlanDto;
import com.trip.plan.model.PlanPlaceDto;

public interface PlanService {

	// 리스트 전체 뿌려주기
	List<PlanDto> planList(int userNo);

	// 계획 추가
	int planAdd(PlanDto planDto);

	int planPlaceListAdd(List<PlanPlaceDto> PlanPlaceDto);

	// 계획 삭제
	int planDelete(int planNo);

	// 계획 수정
	int planModify(PlanDto planDto);

	// 리스트 눌렀을때 detail 뿌리기
	PlanDto planDetail(int planNo);

	// 세부 계획 삭제하기.
	int planDeleteDetail(int planNo, int contentId);

}
