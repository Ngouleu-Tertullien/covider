package cm.ubuea.covider.registration.service.dto;




import java.util.List;


public class LocationDTO {
    private String current_loctaion;
    private List<String > previous_location;
    private String userIdNumber;

    public LocationDTO() {
    }

    public String getCurrent_loctaion() {
        return current_loctaion;
    }

    public void setCurrent_loctaion(String current_loctaion) {
        this.current_loctaion = current_loctaion;
    }

    public List<String> getPrevious_location() {
        return previous_location;
    }

    public void setPrevious_location(List<String> previous_location) {
        this.previous_location = previous_location;
    }

    public String getUserIdNumber() {
        return userIdNumber;
    }

    public void setUserid(String useridNumber) {
        this.userIdNumber = useridNumber;
    }
}
