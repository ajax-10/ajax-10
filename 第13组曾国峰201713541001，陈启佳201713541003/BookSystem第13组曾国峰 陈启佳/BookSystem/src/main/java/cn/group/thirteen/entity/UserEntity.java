package cn.group.thirteen.entity;

public class UserEntity {
	private Integer stuId;
	private String stuNo;
	private String stuName;
	public Integer getStuId() {
		return stuId;
	}
	public void setStuId(Integer stuId) {
		this.stuId = stuId;
	}
	public String getStuNo() {
		return stuNo;
	}
	public void setStuNo(String stuNo) {
		this.stuNo = stuNo;
	}
	public String getStuName() {
		return stuName;
	}
	public void setStuName(String stuName) {
		this.stuName = stuName;
	}
	public UserEntity(Integer stuId, String stuNo, String stuName) {
		super();
		this.stuId = stuId;
		this.stuNo = stuNo;
		this.stuName = stuName;
	}
	public UserEntity() {
		super();
	}
	@Override
	public String toString() {
		return "UserEntity [stuId=" + stuId + ", stuNo=" + stuNo + ", stuName=" + stuName + "]";
	}
	
}
