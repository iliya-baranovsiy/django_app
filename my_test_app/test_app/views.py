from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import UserTg
from django.views import View
from django.views.decorators.csrf import csrf_exempt
import json
from .db import select, update, select_users, get_name
from django.shortcuts import redirect


# Create your views here.
def hello_page(request):
    user_id = request.GET.get('user_id')
    us_list = select_users()[:10]
    name = get_name(user_id)
    context = {
        'user_id': user_id,
        'us_list': us_list,
        'name': name,
    }
    return render(request, "head/for_django.html", context)


def redirect_func(request):
    user_id = request.GET.get('user_id')
    return redirect(f'/head_page/?user_id={user_id}')


def get(request, id):
    data = {
        "id": id,
        "cur": select(id)
    }
    return JsonResponse(data)


@csrf_exempt
def post(request):
    if request.method == "POST":
        data = json.loads(request.body)
        update(data['id'], data['cur'])
    return JsonResponse({'status': 'success', 'data': data})


def hello_page_1(request):
    return render(request, "head/first_page.html")


def okay(request):
    return HttpResponse('pretend-binary-data-here', content_type='image/jpeg')