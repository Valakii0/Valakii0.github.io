const modelsDiv = document.getElementById("models-div")

models = JSON.parse(`{
    "models": [
      {
        "name": "Rolls-Royce Phantom I",
        "description": "The original Phantom, introduced in 1925, marked the beginning of Rolls-Royce's legacy of producing exceptional luxury automobiles. It set the standard for craftsmanship and engineering in its time.",
        "image": "../images/model1.png"
      },
      {
        "name": "Rolls-Royce Phantom II",
        "description": "The Phantom II, introduced in 1929, continued the tradition of luxury and elegance. It featured an improved chassis and engine, making it a symbol of sophistication during the early 20th century.",
        "image": "../images/model2.png"
      },
      {
        "name": "Rolls-Royce Phantom III",
        "description": "The Phantom III, introduced in 1936, represented the pinnacle of pre-war luxury motoring. Known for its V12 engine and advanced technology, it solidified Rolls-Royce's reputation for engineering excellence.",
        "image": "../images/model3.png"
      },
      {
        "name": "Rolls-Royce Phantom IV",
        "description": "The Phantom IV, produced in limited numbers from 1950 to 1956, was a bespoke model created exclusively for royalty and heads of state. Its exclusivity and opulence made it a symbol of prestige.",
        "image": "../images/model4.png"
      },
      {
        "name": "Rolls-Royce Phantom V",
        "description": "The Phantom V, introduced in 1959, was a popular choice among celebrities and dignitaries. Its spacious interior and luxurious features made it the epitome of chauffeur-driven elegance during the 1960s.",
        "image": "../images/model5.png"
      },
      {
        "name": "Rolls-Royce Phantom VI",
        "description": "The Phantom VI, produced from 1968 to 1990, continued the tradition of luxury and grandeur. It was often used for state occasions and represented the pinnacle of automotive excellence during its era.",
        "image": "../images/model6.png"
      },
      {
        "name": "Rolls-Royce Phantom VII",
        "description": "The Phantom VII, introduced in 2003, marked a modern renaissance for the Phantom series. It combined classic design elements with contemporary technology, reaffirming Rolls-Royce's position at the forefront of luxury motoring.",
        "image": "../images/model7.png"
      },
      {
        "name": "Rolls-Royce Phantom VIII",
        "description": "The latest iteration of the iconic luxury sedan. Known for its unparalleled craftsmanship, the Phantom VIII offers a sublime driving experience with opulent interiors and cutting-edge technology. It continues the legacy of the Phantom series as the pinnacle of automotive luxury.",
        "image": "../images/model8.png"
      }
    ]
}`).models

models.forEach(model => {
    
    modelsDiv.innerHTML += 
        `<div>
            <img src="${model.image}" alt="car.png">
            <div>
                <h1>${model.name}</h1>
                <p>${model.description}</p>
            </div>
        </div>`
        })