package com.phuong.datn.domain;


import com.phuong.datn.service.dto.UserDTO;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "teacher")
public class Teacher extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user")
    private String user;

    @Column(name = "password")
    private String password;

    @Column(name = "nameteacher")
    private String nameTeacher;

    @Column(name = "birthdate")
    private String birthdate;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "idclass")
    private String idClass;

    @Column(name = "image")
    private String image;

    @Column(name = "iduserauth")
    private Long idUserAuth;

    public Teacher() {
    }

    public Teacher(UserDTO userDTO) {
        this.id = id;
        this.user = user;
        this.password = password;
        this.nameTeacher = nameTeacher;
        this.birthdate = birthdate;
        this.address = address;
        this.phone = phone;
        this.idClass = idClass;
        this.image = image;
        this.idUserAuth = userDTO.getId();
    }

    public Long getIdUserAuth() {
        return idUserAuth;
    }

    public void setIdUserAuth(Long idUserAuth) {
        this.idUserAuth = idUserAuth;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameTeacher() {
        return nameTeacher;
    }

    public void setNameTeacher(String nameTeacher) {
        this.nameTeacher = nameTeacher;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getIdClass() {
        return idClass;
    }

    public void setIdClass(String idClass) {
        this.idClass = idClass;
    }

    @Override
    public String toString() {
        return "Teacher{" +
            "id=" + id +
            ", nameTeacher='" + nameTeacher + '\'' +
            ", birthdate='" + birthdate + '\'' +
            ", address='" + address + '\'' +
            ", phone='" + phone + '\'' +
            ", idClass='" + idClass + '\'' +
            ", image='" + image + '\'' +
            '}';
    }
}
