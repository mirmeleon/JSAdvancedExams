function getTickets(descriptions, criteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

    }
let tickets = [];
    for(let t of descriptions){
        let tokens = t.split('|');
        let dest = tokens[0];
        let price = (tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(dest, price, status);
        tickets.push(ticket);
    }



    if(criteria === "destination"){
        return tickets.sort((t1,t2) => t1.destination.localeCompare(t2.destination));
    } else if(criteria === "price"){
        return tickets.sort((t1,t2) => t1.price - t2.price);
    } else{
        return tickets.sort((t1,t2) => t1.status.localeCompare(t2.status));
    }
}
