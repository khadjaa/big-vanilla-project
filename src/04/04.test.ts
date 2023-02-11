import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingWithStaffCounterGreaterThen} from "./04";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses:
            [
                {
                    id: 1,
                    buildedAt: 1999,
                    repaired: false,
                    address: {
                        number: 100,
                        street:
                            {
                                title: "SPB"
                            }
                    }
                },
                {
                    id: 2,
                    buildedAt: 2008,
                    repaired: true,
                    address:
                        {
                            number: 28,
                            street:
                                {
                                    title: "Nevsky"
                                }
                        }
                }
            ],
        governmentBuildings:
            [
                {
                    type: "HOSPITAL",
                    budget: 2000000,
                    staffCount: 2000,
                    address:
                        {
                            street:
                                {
                                    title: "North"
                                }
                        }
                }
            ],
        citizensNumber: 100000
    }
})

test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Nevsky")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test("Buildings with correct staff count", () => {
    let buildings = getBuildingWithStaffCounterGreaterThen(city.governmentBuildings, 100)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('HOSPITAL')
})