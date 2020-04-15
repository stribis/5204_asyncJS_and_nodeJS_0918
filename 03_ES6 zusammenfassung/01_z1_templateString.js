// With template strings we can easily concatinate strings using variables,
// something that was very hard before

let firstName = "Princess",
lastName = "Zelda",
middleName = "of Hyrule";

let qty = 3,
item = "empty jar",
price = 50,
shop = "Beedle's Shop Ship";

// An example that used to look like this:
console.log(lastName + ", " + firstName + " " + middleName);

// Can now look like this
console.log(`${lastName}, ${firstName} ${middleName}`);
// Whitespaces are not ignored

// Here are some examples : 
// Letter
let msg = `

Hello ${firstName},

Thanks for purchasing ${qty} ${item}(s).

Order Details:
    ${firstName} ${lastName} ${middleName}
    ${qty} x $${price} = $${qty * price} of ${item}

You can pick your tickets up at will 30 minutes before the show.

Thanks,

${shop}
`
console.log(msg);

// HTML code

//document.body.innerHTML = 
`
<section>
    <header>
        <h1>${shop}</h1>
    </header>
</section>
`
