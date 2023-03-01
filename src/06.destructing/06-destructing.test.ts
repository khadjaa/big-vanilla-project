// @ts-ignore
type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: "BolSmall"
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: "Isa",
        age: 21,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "BolSmall"
            }
        }
    }
})

test("to be", () => {
    // const age = props.age

    let {age, lessons} = props
    const {title} = props.address.street

    expect(title).toBe("BolSmall")

    expect(age).toBe(21)
    expect(lessons.length).toBe(2)

})