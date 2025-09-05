import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {
    @PostMapping("/book")
    public String book(@RequestBody String booking) {
        return "{\"status\":\"success\",\"message\":\"Booking confirmed!\"}";
    }

    @PostMapping("/pay")
    public String pay(@RequestBody String booking) {
        return "{\"status\":\"success\",\"message\":\"Payment updated!\"}";
    }

    @GetMapping("/bookings")
    public List<String> bookings() {
        return List.of();
    }
}