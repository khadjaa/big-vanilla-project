import {CityType, governmentBuildingsType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingWithStaffCounterGreaterThen(buildings: Array<governmentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}