import psycopg2


def select(id):
    con = psycopg2.connect(
        dbname='my_db',
        user='postgres',
        password='1234567890qwerty',
        host='localhost',
        port='5432')
    cur = con.cursor()
    cur.execute("""SELECT currency FROM test_app_usertg WHERE tg_id = %s""", (id,))
    rec = cur.fetchall()
    con.close()
    return rec[0][0]


def update(id, value):
    con = psycopg2.connect(
        dbname='my_db',
        user='postgres',
        password='1234567890qwerty',
        host='localhost',
        port='5432')
    cur = con.cursor()
    cur.execute("""UPDATE test_app_usertg SET currency = %s WHERE tg_id = %s""", (value, id,))
    con.commit()
    con.close()


def select_users():
    con = psycopg2.connect(
        dbname='my_db',
        user='postgres',
        password='1234567890qwerty',
        host='localhost',
        port='5432')
    cur = con.cursor()
    cur.execute("""SELECT name FROM test_app_usertg ORDER BY currency DESC""")
    rec = cur.fetchall()
    con.close()
    list_ = []
    for i in rec:
        list_.append(i[0])
    return list_


def get_name(id):
    con = psycopg2.connect(
        dbname='my_db',
        user='postgres',
        password='1234567890qwerty',
        host='localhost',
        port='5432')
    cur = con.cursor()
    cur.execute("""SELECT name FROM test_app_usertg WHERE tg_id = %s""", (id,))
    rec = cur.fetchall()
    con.close()
    return rec[0][0]



