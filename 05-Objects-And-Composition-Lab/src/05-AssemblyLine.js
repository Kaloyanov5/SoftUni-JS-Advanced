function createAssemblyLine() {
    return {
        hasClima: function(object){
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = function() {
                if (this.temp < this.tempSettings){
                    this.temp++;
                } else if (this.temp > this.tempSettings){
                    this.temp--;
                }
                return;
            }
        },
        hasAudio: function(object) {
            object.currentTrack = null;
            object.nowPlaying = function() {
                if (this.currentTrack != null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
                return;
            }
        },
        hasParktronic: function(object) {
            object.checkDistance = function(distance) {
                if (distance < 0.1) console.log("Beep! Beep! Beep!");
                else if (distance < 0.25) console.log("Beep! Beep!");
                else if (distance < 0.5) console.log("Beep!");
                else console.log("");
            }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);