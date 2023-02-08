import {CityType} from "../02/02_02";

export const repairHouse = (city: CityType) => {
    city.houses[0].repaired = true
}

export function fireStaff(city: CityType, fireCountStaff: number) {
    city.governmentBuildings[0].staffCount -= fireCountStaff
}