function getWorker(worker){
    if(!worker.dizziness) return worker;

    const requiredAmount = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += requiredAmount;
    worker.dizziness = !worker.dizziness;

    return worker;
}

console.log(getWorker({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }))