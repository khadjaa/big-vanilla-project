import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{buildedAt: 1999, repaired: false, address: {number: 100, street: {title: "SPB"}}},
            {buildedAt: 2008, repaired: true, address: {number: 28, street: {title: "Nevsky"}}}],
        governmentBuildings: [{type: "HOSPITAL", budget: 2000000, staffCount: 200, address:{street:{title:"North"}}}],
        citizensNumber: 100000
    }
})

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(2);

    expect(city.houses[0].buildedAt).toBe(1999);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("SPB");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(28);
    expect(city.houses[1].address.street.title).toBe("Nevsky");
})

test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(1);

    expect(city.governmentBuildings[0].budget).toBe(2000000);
    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("North");
})