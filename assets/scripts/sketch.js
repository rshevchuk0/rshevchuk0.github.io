var c;
var sButton;
var inTextarea;

function setup()
{
    c = createCanvas(1,1);
    sButton = select("#sButton");
    inTextarea = select("#ti-1");
    sButton.mouseClicked(openAIProcess);
}

function draw()
{

}

function openAIProcess()
{
    var url = "https://api.openai.com/v1/completions";

    httpDo(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": inTextarea.value(),
                "temperature": 0.7,
                "max_tokens": 256,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        },
        function(res)
        {
            var o = JSON.parse(res);
            inTextarea.value(inTextarea.value() + o.choices[0].text);
        }
    );
}