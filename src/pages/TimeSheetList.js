import React from 'react'
import TimeSheet from '../components/TimeSheet';
import Navbar from '../components/Navbar';
import Component from '../components/Footer';

const TimeSheetList = () => {
    return (
        <>
            <Navbar />
            <TimeSheet />
            <Component />
        </>
    )
}

export default TimeSheetList;