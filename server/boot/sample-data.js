module.exports = function(app) {
    app.dataSources.mockDatabase.automigrate('UserProfile', function(err) {
        if(err) throw err;

        app.models.UserProfile.create([{
            userId: 465465,
            firstName: 'Marek',
            lastName: 'Tomko'
        }], function(err, userProfiles) {
            if (err) throw err;
            console.log('Models created: \n', userProfiles);
        });
    })
}