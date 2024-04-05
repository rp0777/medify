import { useEffect, useState } from "react";
import styles from "./BookingPage.module.css";
import { Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookingDetailsState, hospitalListState } from "../../../store/atoms";
import { useSnackbar } from "notistack";

const BookingPage = ({ hospitalId }) => {
  const { enqueueSnackbar } = useSnackbar();

  const datesArray = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + i);
    datesArray.push(futureDate.toISOString().split("T")[0]);
  }

  const hospitalList = useRecoilValue(hospitalListState);
  const [bookingDetails, setBookingDetials] =
    useRecoilState(bookingDetailsState);

  const oldBookingData = bookingDetails.find(
    (booking) => booking.hospitalDetails["Provider ID"] === hospitalId
  );

  let defaultDate = today.toISOString().split("T")[0];
  let defaultTime = "";

  if (oldBookingData) {
    defaultDate = oldBookingData.date;
    defaultTime = oldBookingData.time;
  }

  const [currentDates, setCurrentDates] = useState(datesArray.slice(0, 3));
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  const updatedBookingDetails = () => {
    const selectedHospital = hospitalList.find(
      (hospital) => hospital["Provider ID"] === hospitalId
    );

    let newBookingDetails;

    if (oldBookingData) {
      newBookingDetails = bookingDetails.map((booking) => {
        if (booking.hospitalDetails["Provider ID"] === hospitalId) {
          return {
            ...booking,
            date: selectedDate,
            time: selectedTime,
          };
        } else {
          return booking;
        }
      });
    } else {
      newBookingDetails = [
        ...bookingDetails,
        {
          hospitalDetails: { ...selectedHospital },
          date: selectedDate,
          time: selectedTime,
        },
      ];
    }

    enqueueSnackbar(
      `Your appointment for ${
        selectedHospital["Hospital Name"]
      } has been booked for ${formatDate(selectedDate)} at ${selectedTime}`,
      {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 3000,
        style: {
          fontFamily: "var(--poppins-font-family)",
          fontSize: "14px",
          width: "400px",
        },
      }
    );

    setBookingDetials(newBookingDetails);
  };

  useEffect(() => {
    if (selectedTime) {
      updatedBookingDetails();
    }
  }, [selectedTime]);

  const getFutureDates = () => {
    const index = datesArray.indexOf(currentDates[currentDates.length - 1]) + 1;

    if (index < datesArray.length) {
      setCurrentDates(datesArray.slice(index, index + 3));
      return;
    } else {
      // setCurrentDates(datesArray.slice(index - 3, index));
      return;
    }
  };

  const getPreviousDates = () => {
    const index = datesArray.indexOf(currentDates[0]);

    if (index <= 0) {
      // setCurrentDates(datesArray.slice(0, 3));
      return;
    } else {
      setCurrentDates(datesArray.slice(index - 3, index));
    }
  };

  const formatDate = (originalDate) => {
    const newDate = new Date(originalDate);
    const dayOfWeek = newDate.getDay();
    const day = newDate.getDate();
    const month = newDate.getMonth();

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      " June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    if (originalDate === today) {
      return "Today";
    } else if (originalDate === tomorrowString) {
      return "Tomorrow";
    } else {
      return `${weekDays[dayOfWeek]}, ${day} ${months[month]}`;
    }
  };

  const DateButton = ({ currentDate, selectedDate, setSelectedDate }) => {
    const handleDateSelection = () => {
      setSelectedDate(currentDate);
    };

    return (
      <button
        className={
          selectedDate === currentDate
            ? `${styles.dayTab} ${styles.activeTab}`
            : `${styles.dayTab}`
        }
        onClick={() => handleDateSelection()}
      >
        <p className={styles.dayTitle}>{formatDate(currentDate)}</p>

        <p className={styles.slotsAvailable}>11 Slots Available</p>
      </button>
    );
  };

  return (
    <div className={styles.bookingPage}>
      <div className={styles.dates}>
        <button className={styles.navBtns} onClick={getPreviousDates}>
          {"<"}
        </button>

        {currentDates.map((currentDate) => (
          <Fragment key={currentDate}>
            <DateButton
              currentDate={currentDate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </Fragment>
        ))}

        <button className={styles.navBtns} onClick={getFutureDates}>
          {">"}
        </button>
      </div>

      <div className={styles.timeSlots}>
        <div className={styles.timeSlot}>
          <p className={styles.slotTitle}>Morning</p>

          <div className={styles.timeBtns}>
            <button
              className={
                selectedTime === "11:30 AM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("11:30 AM")}
            >
              11:30 AM
            </button>
          </div>
        </div>

        <div className={styles.timeSlot} id={styles.afternoonSlot}>
          <p className={styles.slotTitle}>Afternoon</p>

          <div className={styles.timeBtns}>
            <button
              className={
                selectedTime === "12:00 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("12:00 PM")}
            >
              12:00 PM
            </button>
            <button
              className={
                selectedTime === "12:30 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("12:30 PM")}
            >
              12:30 PM
            </button>
            <button
              className={
                selectedTime === "01:30 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("01:30 PM")}
            >
              01:30 PM
            </button>
            <button
              className={
                selectedTime === "02:00 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("02:00 PM")}
            >
              02:00 PM
            </button>
            <button
              className={
                selectedTime === "02:30 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("02:30 PM")}
            >
              02:30 PM
            </button>
          </div>
        </div>

        <div className={styles.timeSlot}>
          <p className={styles.slotTitle}>Evening</p>

          <div className={styles.timeBtns}>
            <button
              className={
                selectedTime === "06:00 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("06:00 PM")}
            >
              06:00 PM
            </button>
            <button
              className={
                selectedTime === "06:30 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("06:30 PM")}
            >
              06:30 PM
            </button>
            <button
              className={
                selectedTime === "07:00 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("07:00 PM")}
            >
              07:00 PM
            </button>
            <button
              className={
                selectedTime === "07:30 PM"
                  ? `${styles.timeBtn} ${styles.selectedTime}`
                  : styles.timeBtn
              }
              onClick={() => setSelectedTime("07:30 PM")}
            >
              07:30 PM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
