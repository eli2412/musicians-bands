const { db } = require('./db');
const { Band, Musician, Song } = require('./index')
describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run

        await db.sync({ force: true });
    })


    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: "Elias", genre: "R&B"});
        expect(testBand.name).toBe("Elias");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: "Elias", instrument: "Piano"});
        expect(testMusician.instrument).toBe("Piano");
    })

    test('can update a Band', async () => {
        let testBand = await Band.create({name: "Elias", genre: "R&B"});
        await Band.update(
            {name: "Eli"},
            {where: {name: "Elias"}}
        );
        testBand = await Band.findOne({where: {name: "Eli"}});
        expect(testBand.name).toBe("Eli");
    });

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        let testMusician = await Musician.create({name: "Elias", instrument: "Piano"});
        await Musician.update(
            {instrument: "Violin"},
            {where: {instrument: "Piano"}}
        );
        testMusician = await Musician.findOne({where: {instrument: "Violin"}});
        expect(testMusician.instrument).toBe("Violin");
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        await Band.bulkCreate([
            {name: "Elias", genre: "R&B"},
            {name: "Matt", genre: "Rap"}
        ]);
        await Band.destroy({where: {name: "Matt"}})
        const deletedBand = await Band.findOne({where: {name: "Matt"}})
        expect(deletedBand).toBeNull();
    })

    // test('can delete a Musician', async () => {
    //     // TODO - test deleting a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })
})