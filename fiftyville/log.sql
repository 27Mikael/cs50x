-- Keep a log of any SQL queries you execute as you solve the mystery.

-- TODO: cs50 duck was stolen on Humphrey Street, July 28 2024
-- find who was on Humphrey str on July 28 2024
-- access crime_scene_reports
SELECT
    name,
    day,
    month,
    transcript
FROM interviews
WHERE year = 2024 AND month = 7 AND day = 28;

-- TODO: a minute after the thief made a call(phone records) 
-- booked early flight out of fiftyville, on 29/7/2024 (check flight records)
-- 10 minutes they left via car in parking lot (camera footage)
-- BONUS: were seen on Leggett street withdrawing cash at an atm, theft was at
-- 10:15am
/*
-- 1. phone records
SELECT
    calls.id,
    caller.name AS caller_name,
    caller.license_plate AS caller_license,
    calls.caller AS caller_number,
    receipient.name AS receipient_name,
    receipient.license_plate AS receipient_license,
    calls.receiver AS receipient_number,
    calls.duration
FROM
    phone_calls calls
JOIN people AS caller ON caller.phone_number = calls.caller
JOIN people AS receipient ON receipient.phone_number = calls.receiver
WHERE
    calls.year = 2024
    AND
    calls.month = 7
    AND
    calls.day = 28
    AND
    calls.duration <= 60;

-- 2. find booked flights 
SELECT
    people.name,
    passengers.passport_number,
    flights.origin_airport_id,
    flights.destination_airport_id,
    flights.hour,
    flights.minute
FROM flights
JOIN passengers ON passengers.flight_id = flights.id
JOIN people ON passengers.passport_number = people.passport_number
WHERE day = 29 AND month = 7 AND year = 2024 AND hour <= 10;

-- 3. find individuals whose cars were in the parking lot on the day
SELECT
    people.name,
    bklog.activity,
    bklog.license_plate,
    bklog.hour,
    bklog.minute
FROM bakery_security_logs AS bklog
JOIN people ON people.license_plate = bklog.license_plate
WHERE day = 28 AND month = 7 AND year = 2024 AND hour = 10 AND minute <= 30;


-- 4. find the individuals who were at the atm before 10
SELECT
    people.name,
    atm_transactions.account_number
FROM atm_transactions
JOIN people ON people.id = bank_accounts.person_id
JOIN
    bank_accounts
    ON bank_accounts.account_number = atm_transactions.account_number
WHERE
    day = 28
    AND month = 7
    AND year = 2024
    AND atm_transactions.transaction_type = "withdraw"
    AND atm_transactions.atm_location = "Leggett Street";
*/
WITH suspects AS (
    SELECT
        suspect.name,
        origin.full_name AS origin_name,
        flights.origin_airport_id AS origin_airport,
        destination.full_name AS destination_name,
        flights.destination_airport_id AS destination_airport

    FROM
        people AS suspect
    JOIN bank_accounts ON suspect.id = bank_accounts.person_id
    JOIN
        atm_transactions
        ON atm_transactions.account_number = bank_accounts.account_number
    JOIN
        bakery_security_logs
        ON bakery_security_logs.license_plate = suspect.license_plate
    JOIN phone_calls ON phone_calls.caller = suspect.phone_number
    JOIN passengers ON passengers.passport_number = suspect.passport_number
    JOIN flights ON flights.id = passengers.flight_id
    JOIN airports AS origin ON origin.id = flights.origin_airport_id
    JOIN
        airports AS destination
        ON destination.id = flights.destination_airport_id
    WHERE
        atm_transactions.transaction_type = 'withdraw'
        AND atm_transactions.atm_location = 'Leggett Street'
        AND atm_transactions.day = 28
        AND atm_transactions.month = 7
        AND atm_transactions.year = 2024
        AND suspect.license_plate = bakery_security_logs.license_plate
        AND destination.id = flights.destination_airport_id
        AND flights.day = 29
        AND flights.hour <= 10
        AND phone_calls.day = 28
        AND phone_calls.duration <= 60
        AND bakery_security_logs.hour = 10
        AND bakery_security_logs.minute <= 30
)

SELECT
    suspects.name AS suspect_name,
    origin_name,
    origin_airport,
    destination_name,
    destination_airport
FROM suspects;

-- TODO: find out the accomplice
-- should be on phone call records for 28 / 7 / 2024
-- should have made a transaction on the 28/7/2024 for a ticket on the 29/7/2024
-- found the suspect (BRUCE) who did he call on 
SELECT
    calls.id,
    caller.name AS caller_name,
    caller.license_plate AS caller_license,
    calls.caller AS caller_number,
    receipient.name AS receipient_name,
    receipient.license_plate AS receipient_license,
    calls.receiver AS receipient_number,
    calls.duration
FROM
    phone_calls calls
JOIN people AS caller ON caller.phone_number = calls.caller
JOIN people AS receipient ON receipient.phone_number = calls.receiver
WHERE
    calls.year = 2024
    AND
    calls.month = 7
    AND
    calls.day = 28
    AND
    calls.duration <= 60
    AND
    caller.name = "Bruce";
