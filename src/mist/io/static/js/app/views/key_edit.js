define('app/views/key_edit', ['app/views/popup'],
    /**
     *  Key Edit View
     *
     *  @returns Class
     */
    function (PopupView) {

        return App.KeyEditView = PopupView.extend({

            templateName: 'key_edit',
            controllerName: 'keyEditController',
            popupId: '#rename-key-popup',

            /**
             *
             *  Methods
             *
             */

            updateSaveButton: function () {
                if (Mist.keysController.renamingKey || !Mist.keyEditController.formReady) {
                    $('#rename-key-ok').addClass('ui-state-disabled');
                } else {
                    $('#rename-key-ok').removeClass('ui-state-disabled');
                }
            },


            /**
             *
             *  Actions
             *
             */

            actions: {


                backClicked: function () {
                    console.log('back');
                    Mist.keyEditController.close();
                },


                saveClicked: function () {
                    Mist.keyEditController.save();
                }
            },


            /**
             *
             *  Observers
             *
             */

            updateSaveButtonObserver: function () {
                Ember.run.once(this, 'updateSaveButton');
            }.observes('Mist.keyEditController.formReady', 'Mist.keysController.renamingKey')
        });
    }
);
