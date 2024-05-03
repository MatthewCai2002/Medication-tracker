export default interface MedicationTracker {
    addMedication(medication: any): void
    updateMedication(medication: any): void
    removeMedication(medication: any): void
    addUser(user: any): void
    authenticateUser(user: any): void
}