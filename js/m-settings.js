
maths.settings = {
    name: "settings",
    areLoaded: false,
    fields: {
        volume: $('#volume'),
        isRandomized: $('#settings input[name="isRandomized"]'),
        showTooltips: $('#settings input[name="showTooltips"]'),
        testModules: $('#settings input[name="modules"]'),
        applyButton: $('#settings-apply'),
        settingsForm: $('#settings-form')
    },
    system: {
        volume: 0.5
    },
    general: {
        showTooltips: "true",
        isRandomized: "false"
    },
    fractions: {

    },
    test: {
        exerciseNum: 2,
        modules: "addition,subtraction,multiplication,division,fractions",
        timerTime: 6,
        unlocked: 0
    },
    changed: {
        system: {},
        general: {},
        test: {}
    },

    init: function() {
        let ns = maths.settings,
            namespace = "maths.settings.";
            all = {
                system: this.system,
                general: this.general,
                test: this.test
            },
            enableApplyButton = enable => ns.fields.applyButton.prop('disabled', !enable),
            updateVolumeLabel = value => {
                $('#volume-label').html(value + "%");
                if (value < 1) $('#speaker').prop('src', 'pics/speaker-muted.png');
                else if (value < 30) $('#speaker').prop('src', 'pics/speaker-low-volume.png');
                else if (value < 70) $('#speaker').prop('src', 'pics/speaker-medium-volume.png');
                else $('#speaker').prop('src', 'pics/speaker-high-volume.png');
            };
        // read settings from local storage and update all settings fields
        this.accessStorage(all, namespace, false);
        this.areLoaded = true;                      
        this.fields.volume.val(this.system.volume * 100);  
        updateVolumeLabel(this.system.volume * 100);    
        this.fields.isRandomized.filter('[value="' + this.general.isRandomized + '"]').prop('checked', true);
        this.fields.showTooltips.filter('[value="' + this.general.showTooltips + '"]').prop('checked', true);
        this.fields.testModules.each((_i, el) => {
            let checked = false;
            this.test.modules.split(",").forEach((val) => {
                if ($(el).is('[value="' + val + '"]')) {
                    checked = true;
                }
            });
            $(el).prop('checked', checked);
        });
        
        // attach listeners to all settings fields
        this.fields.volume.on('input change', function() {
            updateVolumeLabel($(this).val());
        });
        this.fields.volume.on('change', function() {
            let volume = $(this).val() / 100;
            ns.changed.system.volume = volume;
            maths.playSound(true, volume);
            enableApplyButton(true);
        });
        this.fields.isRandomized.on('change', function() {
            ns.changed.general.isRandomized = $(this).val();
            ns.fields.applyButton.prop('disabled', false);
        });
        this.fields.showTooltips.on('change', function() {
            ns.changed.general.showTooltips = $(this).val();
            enableApplyButton(true);
        });
        this.fields.testModules.on('change', function() {
            let mods = [];
            ns.fields.testModules.each((i, el) => {
                if ($(el).is(':checked')) mods.push($(el).val())
            })
            ns.changed.test.modules = mods.join(",");
            enableApplyButton(true);
        });
        this.fields.settingsForm.on('submit', function(e) {
            e.preventDefault();
            ns.accessStorage(ns.changed, namespace, true);
            ns.applyChanges();
            ns.resetChanges();
            enableApplyButton(false);
        });
        this.fields.settingsForm.on('reset', ()=>{
            setTimeout(() => this.fields.volume.trigger('input'), 100);
            enableApplyButton(true);
        });
    },
    accessStorage: function(object, namespace, write) {
        try {
            if (typeof (Storage) !== "undefined") {
                for (let field in object) {
                    if (object.hasOwnProperty(field)) {
                        if (typeof object[field] === 'object') {    // obtaining all values recursively
                            this.accessStorage(object[field], namespace + field + ".", write);
                        } else if(write) {
                            localStorage.setItem(namespace + field, object[field]);
                            console.log("saving: " + namespace + field + ": " + object[field]); /** */
                        } else {
                            let loaded = localStorage.getItem(namespace + field);
                            console.log("loading: " + namespace + field + ": " + loaded);   //** */
                            if (loaded !== null) object[field] = loaded;
                        }
                    }
                }
            }
        } catch(error) {
            alert("can't access the local storage");
        }
    },
    applyChanges: function() {
        let changed = this.changed,
            object, temp, field, isEmpty,
            resetModules = () => {  // resets levelDisplayed property of Operation modules, this will cause
                for (object in maths) {  // the program to reload modules next time they will be displayed
                    if (maths.hasOwnProperty(object) &&  
                        Object.getPrototypeOf(maths[object]) === Operation.prototype) {
                        maths[object]["levelDisplayed"] = null; // actual reset
                    }
                }
            }
        for (object in changed) {   // assign temporary changes to actual settings
            if (changed.hasOwnProperty(object)) {
                temp = changed[object];
                isEmpty = true;
                for (field in temp) {
                    if (temp.hasOwnProperty(field)) {
                        this[object][field] = temp[field];
                        isEmpty = false;
                    }
                }
                if (!isEmpty && object === "general") resetModules();
            }
        }   
    },
    resetChanges: function() {
        for (let field in this.changed) {
            if (this.changed.hasOwnProperty(field)) {
                this.changed[field] = {};
            }
        }
    }

}