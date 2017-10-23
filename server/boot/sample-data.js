module.exports = function(app) {
    app.dataSources.mockDatabase.automigrate('UserProfile', function(err) {
        if(err) throw err;

        app.models.UserProfile.create([{
            userId: 465465,
            firstName: 'Marek',
            lastName: 'Tomko',
            assignerTeamId: 123
        },{
            userId: 123546,
            firstName: 'Test',
            lastName: 'Driver',
            assignerTeamId: 0
        }], function(err, userProfiles) {
            if (err) throw err;
            console.log('Models created: \n', userProfiles);
        });
    })

    app.dataSources.mockDatabase.automigrate('UserSetup', function(err) {
        if(err) throw err;

        app.models.UserSetup.create([{
            userId: 465465,
            pace: 75,
            agresivity: 75,
            consistency: 80,
            startReaction: 60
        },{
            userId: 123546,
            pace: 5,
            agresivity: 6,
            consistency: 7,
            startReaction: 8
        }], function(err, userSetups) {
            if (err) throw err;
            console.log('Models created: \n', userSetups);
        });
    })

    app.dataSources.mockDatabase.automigrate('VehicleSetup', function(err) {
        if(err) throw err;

        app.models.VehicleSetup.create([{
            assignedUserId: 465465,
            teamId: 123,
            frontWing: 75,
            rearWing: 75,
            gearbox: 80,
            suspension: 60,
            turbo: 50
        }], function(err, vehicleSetups) {
            if (err) throw err;
            console.log('Models created: \n', vehicleSetups);
        });
    })    
}