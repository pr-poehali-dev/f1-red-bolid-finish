import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900">ОйлПро</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Команда</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Профессиональная
                <span className="text-red-400"> замена масла</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Быстро, качественно и с гарантией. Используем только оригинальные масла и фильтры от ведущих производителей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на замену
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Узнать цену
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-scale-in">
              <img 
                src="/img/8b1ce4eb-e38a-45d0-987b-3daddc0eb299.jpg" 
                alt="Профессиональная замена масла" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 10 лет опыта в области автосервиса. Тысячи довольных клиентов доверяют нам свои автомобили.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Быстрое обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Замена масла всего за 15 минут. Записывайтесь онлайн и экономьте время.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-red-600" size={32} />
                </div>
                <CardTitle className="text-xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Используем только оригинальные масла. Гарантия на все работы 6 месяцев.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl">Опытная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Сертифицированные механики с опытом работы более 5 лет каждый.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по замене масла и техническому обслуживанию автомобилей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Замена моторного масла</CardTitle>
                  <Icon name="Droplets" className="text-blue-600" size={24} />
                </div>
                <CardDescription>Полная замена с проверкой уровня</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Слив старого масла</p>
                  <p className="text-sm text-gray-600">• Замена масляного фильтра</p>
                  <p className="text-sm text-gray-600">• Заправка новым маслом</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">от 1500₽</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Замена трансмиссионного масла</CardTitle>
                  <Icon name="Settings" className="text-red-600" size={24} />
                </div>
                <CardDescription>АКПП, МКПП, вариатор</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Диагностика коробки</p>
                  <p className="text-sm text-gray-600">• Полная замена жидкости</p>
                  <p className="text-sm text-gray-600">• Замена фильтров</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">от 3500₽</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Экспресс-замена</CardTitle>
                  <Icon name="Zap" className="text-green-600" size={24} />
                </div>
                <CardDescription>Быстрая замена за 10 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Без записи</p>
                  <p className="text-sm text-gray-600">• Замена без ямы</p>
                  <p className="text-sm text-gray-600">• Проверка уровней</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">от 1200₽</span>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Замена всех фильтров</CardTitle>
                  <Icon name="Filter" className="text-purple-600" size={24} />
                </div>
                <CardDescription>Воздушный, топливный, салонный</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Воздушный фильтр</p>
                  <p className="text-sm text-gray-600">• Топливный фильтр</p>
                  <p className="text-sm text-gray-600">• Салонный фильтр</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">от 2500₽</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Диагностика двигателя</CardTitle>
                  <Icon name="Search" className="text-orange-600" size={24} />
                </div>
                <CardDescription>Компьютерная диагностика</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Сканирование ошибок</p>
                  <p className="text-sm text-gray-600">• Проверка систем</p>
                  <p className="text-sm text-gray-600">• Рекомендации по ремонту</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">от 800₽</span>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700">Заказать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Полное ТО</CardTitle>
                  <Icon name="CheckCircle" className="text-blue-600" size={24} />
                </div>
                <CardDescription>Комплексное обслуживание</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">• Замена масла и фильтров</p>
                  <p className="text-sm text-gray-600">• Диагностика всех систем</p>
                  <p className="text-sm text-gray-600">• Проверка тормозов</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">от 5500₽</span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Заказать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные механики с многолетним опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-blue-600" size={40} />
                </div>
                <CardTitle>Алексей Петров</CardTitle>
                <CardDescription>Главный механик</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">15 лет опыта работы с двигателями всех типов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-red-600" size={40} />
                </div>
                <CardTitle>Михаил Сидоров</CardTitle>
                <CardDescription>Специалист по АКПП</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Эксперт по автоматическим коробкам передач</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-green-600" size={40} />
                </div>
                <CardTitle>Дмитрий Козлов</CardTitle>
                <CardDescription>Диагност</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Специалист компьютерной диагностики</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-purple-600" size={40} />
                </div>
                <CardTitle>Андрей Николаев</CardTitle>
                <CardDescription>Мастер-универсал</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Широкий спектр ремонтных работ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Записывайтесь на обслуживание или задавайте вопросы
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Автосервисная, 15</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@oilpro.ru</p>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl">Записаться на замену масла</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение 10 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Марка автомобиля</label>
                  <Input placeholder="Toyota, BMW, Audi..." />
                </div>
                <div>
                  <label className="text-sm font-medium">Комментарий</label>
                  <Textarea placeholder="Дополнительная информация..." />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="text-blue-400" size={24} />
                <span className="text-xl font-bold">ОйлПро</span>
              </div>
              <p className="text-gray-400">
                Профессиональный автосервис по замене масла и техническому обслуживанию автомобилей в Москве.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Замена моторного масла</li>
                <li>Замена трансмиссионного масла</li>
                <li>Замена фильтров</li>
                <li>Диагностика двигателя</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@oilpro.ru</p>
                <p>г. Москва, ул. Автосервисная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ОйлПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;