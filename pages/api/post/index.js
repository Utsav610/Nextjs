export default function handler(req,res){
    res.status(200).json({
        "posts": [
            {
                "id": 1,
                "title": "Post 1",
                "content": "This is the full content of post 1"
            },
            {
                "id": 2,
                "title": "Post 2",
                "content": "This is the full content of post 2"
            },
            {
                "id": 3,
                "title": "Post 3",
                "content": "This is the full content of post 3"
            },
            {
                "id": 4,
                "title": "Post 4",
                "content": "This is the full content of post 4"
            }
        ]
    })
}