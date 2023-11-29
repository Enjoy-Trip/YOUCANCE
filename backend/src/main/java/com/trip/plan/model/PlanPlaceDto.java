package com.trip.plan.model;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PlanPlaceDto {
	private int planNo;
	private int contentid;
	private String planDay;

	public int getPlanNo() {
		return planNo;
	}

	public void setPlanNo(int planNo) {
		this.planNo = planNo;
	}

	public int getContentid() {
		return contentid;
	}

	public void setContentid(int contentid) {
		this.contentid = contentid;
	}

	public String getPlanDay() {
		return planDay;
	}

	public void setPlanDay(String planDay) {
		this.planDay = planDay;
	}

	@Override
	public String toString() {
		return "PlanPlaceDto [contentid=" + contentid + ", planDay=" + planDay + "]";
	}
}
