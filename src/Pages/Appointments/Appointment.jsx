import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                setSelected={setSelected}
                selected={selected}
            />
            <AvailableAppointment
            selected={selected}
            />
        </div>
    );
};

export default Appointment;