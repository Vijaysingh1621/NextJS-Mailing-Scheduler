interface Mailing {
    id: string
    mailerId: string
    listId: string
    scheduleDateTime: string
  }
  
  // Mock data
  let mailings: Mailing[] = []
  
  export async function getMailings(): Promise<Mailing[]> {
    return mailings
  }
  
  export async function createMailing(mailing: Omit<Mailing, "id">): Promise<Mailing> {
    const newMailing = { ...mailing, id: Math.random().toString(36).substr(2, 9) }
    mailings.push(newMailing)
    return newMailing
  }
  
  export async function deleteMailing(id: string): Promise<void> {
    mailings = mailings.filter((mailing) => mailing.id !== id)
  }
  
  