basic.forever(function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(80, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetSpeed(80)
    } else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetSpeed(50)
    } else {
        fwdMotors.leftServo.fwdSetSpeed(0)
    }
})
