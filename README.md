# react-voting-app
Final project for react boot camp

## Data structure
1. voter: first name, last name, address, county/city, birthdate, email, and phone.
```
{
    id: ID (Generated)
    firstName: String
    lastName: String
    address: String
    city: String
    birthDate: String
    email: String
    phone: String
}
```

2. Election:  
```
{
    id: ID
    name: String
    questions: [
        {
            id: ID
            question: {
                question: String
                yesCount: Int
            }
        }
    ]
    voterIds: [ids]
}
```


## Workflow Flow


2. 
    a. user is presented with a screen to enter voter id
    b. if their voter id is valid (hasnt been used to vote in this election), they are presented with the ballot


    Implement new law1: *description of the law*
    y n
    Implement new law2: *description of the law*
    y n

    Ballot {
        id: 1
        voterId: 1
        electionId: 1
        questions: [
            {
                question: "Implement new law1: *description of the law*"
                response: T
            }
            {
                question: Implement new law2: *description of the law*
                response: F
            }
        ]
    }

    {

    }


