package cn.group.thirteen.mapper;

import java.util.List;

import cn.group.thirteen.entity.UserEntity;

public interface UserMapper {
	Integer insertStudent(UserEntity ue);
	List<UserEntity> queryStudentAll();
	UserEntity queryStudent(String stuName);
}
