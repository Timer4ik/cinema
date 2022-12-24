import Calendar from "@/utils/calendar"
import { ref } from "vue"

export const useCalendarDatePicker = () => {
    const calendar = ref({})
    const startRangeDate = ref(null)
    const endRangeDate = ref(null)

    const initCalendar = (callback) => {
        calendar.value = new Calendar()
        calendar.value.generateCalendar(callback)
    }

    const selectRange = (cellDate) => {
        
        if (!startRangeDate.value) {
            startRangeDate.value = cellDate
        }
        else if (!endRangeDate.value) {
            endRangeDate.value = cellDate
        }
        else {
            startRangeDate.value = null
            endRangeDate.value = null
        }

        calendar.value.generateCalendar()
    }

    return { calendar, startRangeDate, endRangeDate, selectRange, initCalendar }
}