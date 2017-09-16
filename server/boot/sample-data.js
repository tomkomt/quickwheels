module.exports = function(app) {
    app.dataSources.mockDatabase.automigrate('UserProfile', function(err) {
        if(err) throw err;

        app.models.UserProfile.create([{
            userId: 465465,
            firstName: 'Marek',
            lastName: 'Tomko'
        },{
            userId: 123546,
            firstName: 'Test',
            lastName: 'Driver'
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
}