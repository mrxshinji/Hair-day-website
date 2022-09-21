import React from 'react';

export default function Detail() {
    return (
        <section id="detail">
            <div id="detail-opening" className='card'>
                <h3>Opening Hours</h3>
                <p>Monday & Tuesday CLOSED</p>
                <p>Wednesday – Friday 9am – 8pm</p>
                <p>Saturday 9am – 5pm</p>
                <p>Sunday 11am – 7pm</p>
            </div>
            <div id="detail-location" className='card'>
                <h3>Location</h3>
                <p>T: 123-456-7890</p>
                <br />
                <p>XX Dayton Street</p>
                <p>Madison, Wisconsin</p>
            </div>
            <div id="detail-booking" className='card'>
                <h3>Booking Form</h3>
                <form id="booking" action="/" method="post">
                    <label htmlFor="booking-name">Name</label>
                    <input autoComplete="off" type="text" name="name" id="booking-name" placeholder='name'  />
                    <label htmlFor="booking-tel">Tel No.</label>
                    <input autoComplete="off" type="text" name="name" id="booking-tel" placeholder='name'  />
                    <label htmlFor="booking-date">Date</label>
                    <input autoComplete="off" type="date" name="name" id="booking-date" placeholder='name'  />
                </form>
            </div>
        </section>
    )
}