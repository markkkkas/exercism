def convert(number):
    words = {
        3: 'Pling',
        5: 'Plang',
        7: 'Plong'
    }

    sound = ''.join([v for k, v in words.items() if number % k == 0])
    return sound or str(number)