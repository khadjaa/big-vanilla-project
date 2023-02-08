import {CityType} from "../02/02_02";
import {fireStaff, repairHouse} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses:
            [
                {
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


test("Repair house", () => {
    repairHouse(city)
    expect(city.houses[0].repaired).toBe(true)
})

test("FireStaff", () => {
    fireStaff(city, 300)
    expect(city.governmentBuildings[0].staffCount).toBe(1700)
})