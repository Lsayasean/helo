select id as helo_id, auther_id, post, author, picture from helo
join posts on helo.id = helo.id
and id = 1