const {expect} = require('chai')
const {bookSelection, carService} = require('../03. Car service_Resources')

describe("carService", () => {
    describe("isItExpensive", () => {
        it("test1", () => {
            expect(carService.isItExpensive("Engine")).to.be.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive("Transmission")).to.be.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive("string")).to.be.equal(`The overall price will be a bit cheaper`)
        });
    })
    describe('discount', () => {
        it("test2", () => {
            expect(carService.discount(2, 100)).to.be.equal('You cannot apply a discount')
            expect(carService.discount(3, 100)).to.be.equal(`Discount applied! You saved ${15}$`)
            expect(carService.discount(7, 100)).to.be.equal(`Discount applied! You saved ${15}$`)
            expect(carService.discount(5, 100)).to.be.equal(`Discount applied! You saved ${15}$`)
            expect(carService.discount(8, 100)).to.be.equal(`Discount applied! You saved ${30}$`)
            expect(carService.discount(10, 100)).to.be.equal(`Discount applied! You saved ${30}$`)
            expect(carService.discount(1, 100)).to.be.equal('You cannot apply a discount')
            
            expect(() => carService.discount('2', '100')).throw("Invalid input")
            expect(() => carService.discount(2, '100')).throw("Invalid input")
            expect(() => carService.discount('2', 100)).throw("Invalid input")
            expect(() => carService.discount('', '')).throw("Invalid input")
            expect(() => carService.discount([], 100)).throw("Invalid input")
            expect(() => carService.discount(5, {})).throw("Invalid input")
        });
    })
    describe('partsToBuy', () => {
        it("test3", () => {
            expect(() => carService.partsToBuy({ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 },(["blowoff valve", "injectors"]))).to.throw( "Invalid input")
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],("blowoff valve", "injectors"))).to.throw( "Invalid input")
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],(["blowoff valve", "injectors"]))).to.be.equal(145)
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],([]))).to.be.equal(0)
        });
    })
})