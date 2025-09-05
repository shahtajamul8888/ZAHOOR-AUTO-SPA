import org.springframework.web.bind.annotation.*

@RestController
class BookingController {
    @PostMapping("/book")
    fun book(@RequestBody booking: String) =
        mapOf("status" to "success", "message" to "Booking confirmed!")

    @PostMapping("/pay")
    fun pay(@RequestBody booking: String) =
        mapOf("status" to "success", "message" to "Payment updated!")

    @GetMapping("/bookings")
    fun bookings() = listOf<String>()
}